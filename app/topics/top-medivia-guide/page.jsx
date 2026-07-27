import TopMediviaGuideKeywordPage, { generateMetadata } from './top-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaGuideKeywordPage />;
}
