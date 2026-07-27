import Coxaot13BaiakServerKeywordPage, { generateMetadata } from './coxaot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13BaiakServerKeywordPage />;
}
