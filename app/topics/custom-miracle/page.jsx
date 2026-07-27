import CustomMiracleKeywordPage, { generateMetadata } from './custom-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleKeywordPage />;
}
