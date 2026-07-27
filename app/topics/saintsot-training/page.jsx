import SaintsotTrainingKeywordPage, { generateMetadata } from './saintsot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotTrainingKeywordPage />;
}
