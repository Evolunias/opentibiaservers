import Rubinot13BaiakServerKeywordPage, { generateMetadata } from './rubinot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13BaiakServerKeywordPage />;
}
