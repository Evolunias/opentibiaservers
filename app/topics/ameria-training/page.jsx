import AmeriaTrainingKeywordPage, { generateMetadata } from './ameria-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaTrainingKeywordPage />;
}
