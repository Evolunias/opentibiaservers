import Rubinot12BaiakServerKeywordPage, { generateMetadata } from './rubinot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12BaiakServerKeywordPage />;
}
