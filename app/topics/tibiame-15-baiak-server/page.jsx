import Tibiame15BaiakServerKeywordPage, { generateMetadata } from './tibiame-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15BaiakServerKeywordPage />;
}
