import Coxaot15BaiakServerKeywordPage, { generateMetadata } from './coxaot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15BaiakServerKeywordPage />;
}
