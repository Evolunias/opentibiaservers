import LowrateOlderaGuideKeywordPage, { generateMetadata } from './lowrate-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaGuideKeywordPage />;
}
