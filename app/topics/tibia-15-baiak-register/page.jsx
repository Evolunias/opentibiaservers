import Tibia15BaiakRegisterKeywordPage, { generateMetadata } from './tibia-15-baiak-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakRegisterKeywordPage />;
}
