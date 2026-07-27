import ArcaniarlTrainingKeywordPage, { generateMetadata } from './arcaniarl-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlTrainingKeywordPage />;
}
