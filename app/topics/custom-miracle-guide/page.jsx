import CustomMiracleGuideKeywordPage, { generateMetadata } from './custom-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleGuideKeywordPage />;
}
