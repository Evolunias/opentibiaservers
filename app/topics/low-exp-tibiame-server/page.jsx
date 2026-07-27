import LowExpTibiameServerKeywordPage, { generateMetadata } from './low-exp-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiameServerKeywordPage />;
}
