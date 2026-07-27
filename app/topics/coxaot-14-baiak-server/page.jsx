import Coxaot14BaiakServerKeywordPage, { generateMetadata } from './coxaot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14BaiakServerKeywordPage />;
}
