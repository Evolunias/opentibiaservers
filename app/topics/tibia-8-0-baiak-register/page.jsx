import Tibia80BaiakRegisterKeywordPage, { generateMetadata } from './tibia-8-0-baiak-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakRegisterKeywordPage />;
}
