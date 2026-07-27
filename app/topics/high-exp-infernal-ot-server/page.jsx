import HighExpInfernalOtServerKeywordPage, { generateMetadata } from './high-exp-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpInfernalOtServerKeywordPage />;
}
