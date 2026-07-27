import BaiakOtServerBrazilKeywordPage, { generateMetadata } from './baiak-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerBrazilKeywordPage />;
}
