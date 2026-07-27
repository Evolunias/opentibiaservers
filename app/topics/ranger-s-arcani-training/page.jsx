import RangerSArcaniTrainingKeywordPage, { generateMetadata } from './ranger-s-arcani-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniTrainingKeywordPage />;
}
