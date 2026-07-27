import CustomMapMiracleServersKeywordPage, { generateMetadata } from './custom-map-miracle-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMiracleServersKeywordPage />;
}
