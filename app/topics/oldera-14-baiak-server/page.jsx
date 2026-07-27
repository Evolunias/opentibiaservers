import Oldera14BaiakServerKeywordPage, { generateMetadata } from './oldera-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14BaiakServerKeywordPage />;
}
