import ImperianicTrainingKeywordPage, { generateMetadata } from './imperianic-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicTrainingKeywordPage />;
}
