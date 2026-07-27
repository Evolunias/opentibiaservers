import BaiakXanteriaServerKeywordPage, { generateMetadata } from './baiak-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakXanteriaServerKeywordPage />;
}
