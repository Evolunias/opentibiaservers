import CurrentInfernalOtKeywordPage, { generateMetadata } from './current-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtKeywordPage />;
}
