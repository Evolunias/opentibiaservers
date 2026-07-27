import BaiakRegisterGermanyKeywordPage, { generateMetadata } from './baiak-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterGermanyKeywordPage />;
}
