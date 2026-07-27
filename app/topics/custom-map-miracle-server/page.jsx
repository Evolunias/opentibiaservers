import CustomMapMiracleServerKeywordPage, { generateMetadata } from './custom-map-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMiracleServerKeywordPage />;
}
