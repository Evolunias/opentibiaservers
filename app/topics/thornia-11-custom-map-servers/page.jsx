import Thornia11CustomMapServersKeywordPage, { generateMetadata } from './thornia-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11CustomMapServersKeywordPage />;
}
