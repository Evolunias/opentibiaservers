import CustomInfernalOtServerKeywordPage, { generateMetadata } from './custom-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtServerKeywordPage />;
}
