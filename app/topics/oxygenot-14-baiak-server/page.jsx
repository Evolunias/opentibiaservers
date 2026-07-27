import Oxygenot14BaiakServerKeywordPage, { generateMetadata } from './oxygenot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot14BaiakServerKeywordPage />;
}
