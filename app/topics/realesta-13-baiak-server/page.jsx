import Realesta13BaiakServerKeywordPage, { generateMetadata } from './realesta-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13BaiakServerKeywordPage />;
}
