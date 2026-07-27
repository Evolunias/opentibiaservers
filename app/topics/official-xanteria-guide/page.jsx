import OfficialXanteriaGuideKeywordPage, { generateMetadata } from './official-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaGuideKeywordPage />;
}
