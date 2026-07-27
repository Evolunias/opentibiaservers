import LowrateTibiascapeGuideKeywordPage, { generateMetadata } from './lowrate-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeGuideKeywordPage />;
}
