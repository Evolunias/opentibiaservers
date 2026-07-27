import CustomMiracleServerKeywordPage, { generateMetadata } from './custom-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleServerKeywordPage />;
}
