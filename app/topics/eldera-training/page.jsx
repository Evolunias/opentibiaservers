import ElderaTrainingKeywordPage, { generateMetadata } from './eldera-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaTrainingKeywordPage />;
}
