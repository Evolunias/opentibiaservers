import InfernalOtTrainingKeywordPage, { generateMetadata } from './infernal-ot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtTrainingKeywordPage />;
}
