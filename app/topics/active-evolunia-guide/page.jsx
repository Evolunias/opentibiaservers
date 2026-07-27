import ActiveEvoluniaGuideKeywordPage, { generateMetadata } from './active-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaGuideKeywordPage />;
}
