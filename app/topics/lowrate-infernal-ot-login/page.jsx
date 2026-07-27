import LowrateInfernalOtLoginKeywordPage, { generateMetadata } from './lowrate-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateInfernalOtLoginKeywordPage />;
}
