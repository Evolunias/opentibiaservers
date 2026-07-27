import SerenityTrainingKeywordPage, { generateMetadata } from './serenity-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityTrainingKeywordPage />;
}
