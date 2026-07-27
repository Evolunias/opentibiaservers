import LowrateKasteriaGuideKeywordPage, { generateMetadata } from './lowrate-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaGuideKeywordPage />;
}
