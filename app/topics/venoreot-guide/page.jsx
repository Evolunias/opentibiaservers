import VenoreotGuideKeywordPage, { generateMetadata } from './venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotGuideKeywordPage />;
}
