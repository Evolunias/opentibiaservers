import BaiakRegisterCanadaKeywordPage, { generateMetadata } from './baiak-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterCanadaKeywordPage />;
}
