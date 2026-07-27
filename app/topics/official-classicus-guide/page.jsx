import OfficialClassicusGuideKeywordPage, { generateMetadata } from './official-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusGuideKeywordPage />;
}
