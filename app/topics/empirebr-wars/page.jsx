import EmpirebrWarsKeywordPage, { generateMetadata } from './empirebr-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrWarsKeywordPage />;
}
