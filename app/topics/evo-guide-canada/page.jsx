import EvoGuideCanadaKeywordPage, { generateMetadata } from './evo-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideCanadaKeywordPage />;
}
