import HighrateInfernalOtKeywordPage, { generateMetadata } from './highrate-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateInfernalOtKeywordPage />;
}
