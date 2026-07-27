import CustomInfernalOtOtKeywordPage, { generateMetadata } from './custom-infernal-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtOtKeywordPage />;
}
