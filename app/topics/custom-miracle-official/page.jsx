import CustomMiracleOfficialKeywordPage, { generateMetadata } from './custom-miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleOfficialKeywordPage />;
}
