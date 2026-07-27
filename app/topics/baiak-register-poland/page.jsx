import BaiakRegisterPolandKeywordPage, { generateMetadata } from './baiak-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterPolandKeywordPage />;
}
