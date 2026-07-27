import InfernalOtOpenTibiaKeywordPage, { generateMetadata } from './infernal-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOpenTibiaKeywordPage />;
}
