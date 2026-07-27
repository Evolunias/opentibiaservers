import BaiakLumineraServerKeywordPage, { generateMetadata } from './baiak-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLumineraServerKeywordPage />;
}
