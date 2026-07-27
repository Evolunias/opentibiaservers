import BaiakSabrehavenServerKeywordPage, { generateMetadata } from './baiak-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSabrehavenServerKeywordPage />;
}
