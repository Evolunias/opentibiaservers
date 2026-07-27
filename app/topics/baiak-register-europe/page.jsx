import BaiakRegisterEuropeKeywordPage, { generateMetadata } from './baiak-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterEuropeKeywordPage />;
}
