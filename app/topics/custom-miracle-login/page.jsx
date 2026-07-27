import CustomMiracleLoginKeywordPage, { generateMetadata } from './custom-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleLoginKeywordPage />;
}
