import CustomMapSabrehavenServersKeywordPage, { generateMetadata } from './custom-map-sabrehaven-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSabrehavenServersKeywordPage />;
}
