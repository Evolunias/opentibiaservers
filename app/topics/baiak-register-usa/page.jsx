import BaiakRegisterUsaKeywordPage, { generateMetadata } from './baiak-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterUsaKeywordPage />;
}
