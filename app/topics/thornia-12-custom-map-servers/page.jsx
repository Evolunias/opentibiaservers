import Thornia12CustomMapServersKeywordPage, { generateMetadata } from './thornia-12-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12CustomMapServersKeywordPage />;
}
