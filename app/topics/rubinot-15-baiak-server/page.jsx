import Rubinot15BaiakServerKeywordPage, { generateMetadata } from './rubinot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15BaiakServerKeywordPage />;
}
