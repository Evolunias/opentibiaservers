import ActiveInfernalOtTibiaKeywordPage, { generateMetadata } from './active-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtTibiaKeywordPage />;
}
