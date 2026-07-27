import NewMiracleGuideKeywordPage, { generateMetadata } from './new-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleGuideKeywordPage />;
}
