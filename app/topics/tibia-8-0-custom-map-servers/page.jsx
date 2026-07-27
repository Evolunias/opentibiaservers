import Tibia80CustomMapServersKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapServersKeywordPage />;
}
