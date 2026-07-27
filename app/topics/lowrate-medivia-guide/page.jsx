import LowrateMediviaGuideKeywordPage, { generateMetadata } from './lowrate-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaGuideKeywordPage />;
}
