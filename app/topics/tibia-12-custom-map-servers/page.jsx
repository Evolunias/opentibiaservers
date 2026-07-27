import Tibia12CustomMapServersKeywordPage, { generateMetadata } from './tibia-12-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapServersKeywordPage />;
}
