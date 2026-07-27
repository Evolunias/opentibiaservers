import Tibia13BaiakRegisterKeywordPage, { generateMetadata } from './tibia-13-baiak-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakRegisterKeywordPage />;
}
