import BaiakOtServerUkKeywordPage, { generateMetadata } from './baiak-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerUkKeywordPage />;
}
