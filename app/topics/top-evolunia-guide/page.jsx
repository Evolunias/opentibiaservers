import TopEvoluniaGuideKeywordPage, { generateMetadata } from './top-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaGuideKeywordPage />;
}
