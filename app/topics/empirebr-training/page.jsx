import EmpirebrTrainingKeywordPage, { generateMetadata } from './empirebr-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrTrainingKeywordPage />;
}
