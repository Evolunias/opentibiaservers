import LowrateXanteriaGuideKeywordPage, { generateMetadata } from './lowrate-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaGuideKeywordPage />;
}
