import LowrateAlasteraGuideKeywordPage, { generateMetadata } from './lowrate-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraGuideKeywordPage />;
}
