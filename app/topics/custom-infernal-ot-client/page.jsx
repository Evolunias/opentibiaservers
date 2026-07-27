import CustomInfernalOtClientKeywordPage, { generateMetadata } from './custom-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtClientKeywordPage />;
}
