import CustomInfernalOtOtServerKeywordPage, { generateMetadata } from './custom-infernal-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtOtServerKeywordPage />;
}
