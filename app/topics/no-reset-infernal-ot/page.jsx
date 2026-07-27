import NoResetInfernalOtKeywordPage, { generateMetadata } from './no-reset-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetInfernalOtKeywordPage />;
}
