import EvoGuideUsaKeywordPage, { generateMetadata } from './evo-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideUsaKeywordPage />;
}
