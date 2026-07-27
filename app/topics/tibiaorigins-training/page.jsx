import TibiaoriginsTrainingKeywordPage, { generateMetadata } from './tibiaorigins-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsTrainingKeywordPage />;
}
