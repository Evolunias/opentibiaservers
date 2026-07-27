import HarmoniaOtTrainingKeywordPage, { generateMetadata } from './harmonia-ot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtTrainingKeywordPage />;
}
