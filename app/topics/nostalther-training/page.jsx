import NostaltherTrainingKeywordPage, { generateMetadata } from './nostalther-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherTrainingKeywordPage />;
}
