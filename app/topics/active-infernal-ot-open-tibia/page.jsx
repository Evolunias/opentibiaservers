import ActiveInfernalOtOpenTibiaKeywordPage, { generateMetadata } from './active-infernal-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtOpenTibiaKeywordPage />;
}
