import BaiakThaisotServerKeywordPage, { generateMetadata } from './baiak-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakThaisotServerKeywordPage />;
}
