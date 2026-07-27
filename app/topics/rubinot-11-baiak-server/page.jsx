import Rubinot11BaiakServerKeywordPage, { generateMetadata } from './rubinot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11BaiakServerKeywordPage />;
}
