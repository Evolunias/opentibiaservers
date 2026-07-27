import LowrateImperianicGuideKeywordPage, { generateMetadata } from './lowrate-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicGuideKeywordPage />;
}
