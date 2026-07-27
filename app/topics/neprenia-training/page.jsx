import NepreniaTrainingKeywordPage, { generateMetadata } from './neprenia-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaTrainingKeywordPage />;
}
