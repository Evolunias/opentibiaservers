import CustomMiracleOtServerKeywordPage, { generateMetadata } from './custom-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleOtServerKeywordPage />;
}
