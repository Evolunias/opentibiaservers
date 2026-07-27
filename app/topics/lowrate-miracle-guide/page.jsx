import LowrateMiracleGuideKeywordPage, { generateMetadata } from './lowrate-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleGuideKeywordPage />;
}
