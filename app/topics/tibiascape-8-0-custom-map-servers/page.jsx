import Tibiascape80CustomMapServersKeywordPage, { generateMetadata } from './tibiascape-8-0-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80CustomMapServersKeywordPage />;
}
