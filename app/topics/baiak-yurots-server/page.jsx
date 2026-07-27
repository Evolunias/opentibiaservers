import BaiakYurotsServerKeywordPage, { generateMetadata } from './baiak-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakYurotsServerKeywordPage />;
}
