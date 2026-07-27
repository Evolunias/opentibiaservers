import BaiakRegisterLatinAmericaKeywordPage, { generateMetadata } from './baiak-register-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRegisterLatinAmericaKeywordPage />;
}
