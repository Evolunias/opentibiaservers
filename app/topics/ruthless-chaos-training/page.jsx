import RuthlessChaosTrainingKeywordPage, { generateMetadata } from './ruthless-chaos-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosTrainingKeywordPage />;
}
