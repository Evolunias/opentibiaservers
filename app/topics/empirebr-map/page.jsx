import EmpirebrMapKeywordPage, { generateMetadata } from './empirebr-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrMapKeywordPage />;
}
