import BaiakOtServerPolandKeywordPage, { generateMetadata } from './baiak-ot-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerPolandKeywordPage />;
}
