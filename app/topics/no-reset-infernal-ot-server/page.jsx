import NoResetInfernalOtServerKeywordPage, { generateMetadata } from './no-reset-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetInfernalOtServerKeywordPage />;
}
