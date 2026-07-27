import Coxaot12BaiakServerKeywordPage, { generateMetadata } from './coxaot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12BaiakServerKeywordPage />;
}
