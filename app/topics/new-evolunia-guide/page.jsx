import NewEvoluniaGuideKeywordPage, { generateMetadata } from './new-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaGuideKeywordPage />;
}
