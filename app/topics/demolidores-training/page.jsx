import DemolidoresTrainingKeywordPage, { generateMetadata } from './demolidores-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresTrainingKeywordPage />;
}
