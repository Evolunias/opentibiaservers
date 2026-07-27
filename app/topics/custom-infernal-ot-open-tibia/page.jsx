import CustomInfernalOtOpenTibiaKeywordPage, { generateMetadata } from './custom-infernal-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtOpenTibiaKeywordPage />;
}
