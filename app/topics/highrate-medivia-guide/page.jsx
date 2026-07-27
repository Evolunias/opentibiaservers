import HighrateMediviaGuideKeywordPage, { generateMetadata } from './highrate-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaGuideKeywordPage />;
}
