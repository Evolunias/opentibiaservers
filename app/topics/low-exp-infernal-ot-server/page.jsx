import LowExpInfernalOtServerKeywordPage, { generateMetadata } from './low-exp-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpInfernalOtServerKeywordPage />;
}
