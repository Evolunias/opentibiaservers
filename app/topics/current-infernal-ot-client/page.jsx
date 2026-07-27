import CurrentInfernalOtClientKeywordPage, { generateMetadata } from './current-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtClientKeywordPage />;
}
