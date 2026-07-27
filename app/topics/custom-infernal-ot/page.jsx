import CustomInfernalOtKeywordPage, { generateMetadata } from './custom-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtKeywordPage />;
}
