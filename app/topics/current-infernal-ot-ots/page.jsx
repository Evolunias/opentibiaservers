import CurrentInfernalOtOtsKeywordPage, { generateMetadata } from './current-infernal-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtOtsKeywordPage />;
}
