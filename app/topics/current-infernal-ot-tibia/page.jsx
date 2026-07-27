import CurrentInfernalOtTibiaKeywordPage, { generateMetadata } from './current-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtTibiaKeywordPage />;
}
