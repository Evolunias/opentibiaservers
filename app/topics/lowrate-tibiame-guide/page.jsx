import LowrateTibiameGuideKeywordPage, { generateMetadata } from './lowrate-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameGuideKeywordPage />;
}
