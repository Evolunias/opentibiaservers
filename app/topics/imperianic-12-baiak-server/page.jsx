import Imperianic12BaiakServerKeywordPage, { generateMetadata } from './imperianic-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12BaiakServerKeywordPage />;
}
