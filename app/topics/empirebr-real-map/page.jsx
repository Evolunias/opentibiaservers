import EmpirebrRealMapKeywordPage, { generateMetadata } from './empirebr-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrRealMapKeywordPage />;
}
