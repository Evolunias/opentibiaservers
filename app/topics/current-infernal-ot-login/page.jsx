import CurrentInfernalOtLoginKeywordPage, { generateMetadata } from './current-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtLoginKeywordPage />;
}
