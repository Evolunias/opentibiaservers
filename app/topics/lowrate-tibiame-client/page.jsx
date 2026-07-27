import LowrateTibiameClientKeywordPage, { generateMetadata } from './lowrate-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameClientKeywordPage />;
}
