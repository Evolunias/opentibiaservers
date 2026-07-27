import Imperianic15BaiakServerKeywordPage, { generateMetadata } from './imperianic-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15BaiakServerKeywordPage />;
}
