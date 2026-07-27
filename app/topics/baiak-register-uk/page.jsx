import BaiakRegisterUkKeywordPage, { generateMetadata } from './baiak-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterUkKeywordPage />;
}
