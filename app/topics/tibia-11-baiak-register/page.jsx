import Tibia11BaiakRegisterKeywordPage, { generateMetadata } from './tibia-11-baiak-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakRegisterKeywordPage />;
}
