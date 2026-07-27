import Tibia12BaiakRegisterKeywordPage, { generateMetadata } from './tibia-12-baiak-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakRegisterKeywordPage />;
}
