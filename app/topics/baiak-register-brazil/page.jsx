import BaiakRegisterBrazilKeywordPage, { generateMetadata } from './baiak-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterBrazilKeywordPage />;
}
