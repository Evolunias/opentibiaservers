import OfficialSerenityGuideKeywordPage, { generateMetadata } from './official-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityGuideKeywordPage />;
}
