import BestEvoluniaGuideKeywordPage, { generateMetadata } from './best-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaGuideKeywordPage />;
}
