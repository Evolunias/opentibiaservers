import LowrateClassicusGuideKeywordPage, { generateMetadata } from './lowrate-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusGuideKeywordPage />;
}
