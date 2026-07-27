import ActiveInfernalOtKeywordPage, { generateMetadata } from './active-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtKeywordPage />;
}
