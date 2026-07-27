import SabrehavenTrainingKeywordPage, { generateMetadata } from './sabrehaven-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenTrainingKeywordPage />;
}
