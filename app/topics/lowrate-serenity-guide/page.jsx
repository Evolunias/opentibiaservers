import LowrateSerenityGuideKeywordPage, { generateMetadata } from './lowrate-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityGuideKeywordPage />;
}
