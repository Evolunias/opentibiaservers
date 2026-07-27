import BaiakRegisterSwedenKeywordPage, { generateMetadata } from './baiak-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterSwedenKeywordPage />;
}
