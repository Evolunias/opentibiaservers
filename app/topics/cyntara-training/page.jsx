import CyntaraTrainingKeywordPage, { generateMetadata } from './cyntara-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraTrainingKeywordPage />;
}
