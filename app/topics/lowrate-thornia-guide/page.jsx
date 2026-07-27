import LowrateThorniaGuideKeywordPage, { generateMetadata } from './lowrate-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaGuideKeywordPage />;
}
