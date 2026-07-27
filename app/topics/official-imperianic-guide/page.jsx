import OfficialImperianicGuideKeywordPage, { generateMetadata } from './official-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicGuideKeywordPage />;
}
