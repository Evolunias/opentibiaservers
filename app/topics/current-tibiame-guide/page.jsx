import CurrentTibiameGuideKeywordPage, { generateMetadata } from './current-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameGuideKeywordPage />;
}
