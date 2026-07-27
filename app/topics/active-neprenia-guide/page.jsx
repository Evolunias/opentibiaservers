import ActiveNepreniaGuideKeywordPage, { generateMetadata } from './active-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaGuideKeywordPage />;
}
