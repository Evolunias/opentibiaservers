import LowrateMidhemGuideKeywordPage, { generateMetadata } from './lowrate-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemGuideKeywordPage />;
}
