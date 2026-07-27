import BaiakOtServerEuropeKeywordPage, { generateMetadata } from './baiak-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerEuropeKeywordPage />;
}
