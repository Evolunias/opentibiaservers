import CustomMiracleClientKeywordPage, { generateMetadata } from './custom-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleClientKeywordPage />;
}
