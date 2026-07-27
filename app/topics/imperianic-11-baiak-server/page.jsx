import Imperianic11BaiakServerKeywordPage, { generateMetadata } from './imperianic-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11BaiakServerKeywordPage />;
}
