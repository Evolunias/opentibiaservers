import LowrateCanobGuideKeywordPage, { generateMetadata } from './lowrate-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobGuideKeywordPage />;
}
