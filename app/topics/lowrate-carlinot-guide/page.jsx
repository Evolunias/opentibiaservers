import LowrateCarlinotGuideKeywordPage, { generateMetadata } from './lowrate-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotGuideKeywordPage />;
}
