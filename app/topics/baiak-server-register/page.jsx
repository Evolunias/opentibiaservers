import BaiakServerRegisterKeywordPage, { generateMetadata } from './baiak-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerRegisterKeywordPage />;
}
