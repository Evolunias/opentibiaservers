import CustomMapMarolaotServersKeywordPage, { generateMetadata } from './custom-map-marolaot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMarolaotServersKeywordPage />;
}
