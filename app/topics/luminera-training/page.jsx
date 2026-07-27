import LumineraTrainingKeywordPage, { generateMetadata } from './luminera-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraTrainingKeywordPage />;
}
