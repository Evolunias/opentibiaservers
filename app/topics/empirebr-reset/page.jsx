import EmpirebrResetKeywordPage, { generateMetadata } from './empirebr-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrResetKeywordPage />;
}
