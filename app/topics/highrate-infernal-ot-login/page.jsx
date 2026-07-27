import HighrateInfernalOtLoginKeywordPage, { generateMetadata } from './highrate-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateInfernalOtLoginKeywordPage />;
}
