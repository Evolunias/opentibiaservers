import EvoGuidePolandKeywordPage, { generateMetadata } from './evo-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuidePolandKeywordPage />;
}
