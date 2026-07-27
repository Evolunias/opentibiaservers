import OxygenotTrainingKeywordPage, { generateMetadata } from './oxygenot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotTrainingKeywordPage />;
}
