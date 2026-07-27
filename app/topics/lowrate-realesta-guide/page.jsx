import LowrateRealestaGuideKeywordPage, { generateMetadata } from './lowrate-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaGuideKeywordPage />;
}
