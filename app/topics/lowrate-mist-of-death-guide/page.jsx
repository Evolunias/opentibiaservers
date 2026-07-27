import LowrateMistOfDeathGuideKeywordPage, { generateMetadata } from './lowrate-mist-of-death-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMistOfDeathGuideKeywordPage />;
}
