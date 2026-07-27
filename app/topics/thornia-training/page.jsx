import ThorniaTrainingKeywordPage, { generateMetadata } from './thornia-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaTrainingKeywordPage />;
}
