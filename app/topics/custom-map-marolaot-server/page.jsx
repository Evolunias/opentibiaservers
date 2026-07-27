import CustomMapMarolaotServerKeywordPage, { generateMetadata } from './custom-map-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMarolaotServerKeywordPage />;
}
