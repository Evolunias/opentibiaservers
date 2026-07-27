import HighrateMiracleGuideKeywordPage, { generateMetadata } from './highrate-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleGuideKeywordPage />;
}
