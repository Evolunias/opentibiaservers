import CustomMapImperianicServersKeywordPage, { generateMetadata } from './custom-map-imperianic-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapImperianicServersKeywordPage />;
}
