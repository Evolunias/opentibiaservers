import ArchlightTrainingKeywordPage, { generateMetadata } from './archlight-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightTrainingKeywordPage />;
}
