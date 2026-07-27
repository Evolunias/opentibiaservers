import CurrentTibiameKeywordPage, { generateMetadata } from './current-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameKeywordPage />;
}
