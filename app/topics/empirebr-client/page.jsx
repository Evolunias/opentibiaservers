import EmpirebrClientKeywordPage, { generateMetadata } from './empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrClientKeywordPage />;
}
