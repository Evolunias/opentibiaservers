import CustomInfernalOtLoginKeywordPage, { generateMetadata } from './custom-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtLoginKeywordPage />;
}
