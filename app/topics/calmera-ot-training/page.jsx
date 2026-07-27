import CalmeraOtTrainingKeywordPage, { generateMetadata } from './calmera-ot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtTrainingKeywordPage />;
}
