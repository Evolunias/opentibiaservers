import CustomMiracleOtKeywordPage, { generateMetadata } from './custom-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleOtKeywordPage />;
}
