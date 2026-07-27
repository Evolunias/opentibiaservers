import ActiveInfernalOtLoginKeywordPage, { generateMetadata } from './active-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtLoginKeywordPage />;
}
