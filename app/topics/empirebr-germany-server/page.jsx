import EmpirebrGermanyServerKeywordPage, { generateMetadata } from './empirebr-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrGermanyServerKeywordPage />;
}
