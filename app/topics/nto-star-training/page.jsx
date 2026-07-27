import NtoStarTrainingKeywordPage, { generateMetadata } from './nto-star-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarTrainingKeywordPage />;
}
