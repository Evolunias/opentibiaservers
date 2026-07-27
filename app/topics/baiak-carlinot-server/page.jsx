import BaiakCarlinotServerKeywordPage, { generateMetadata } from './baiak-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakCarlinotServerKeywordPage />;
}
