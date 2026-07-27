import DuraOnlineTrainingKeywordPage, { generateMetadata } from './dura-online-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineTrainingKeywordPage />;
}
