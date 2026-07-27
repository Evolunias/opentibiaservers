import CurrentTibiameClientKeywordPage, { generateMetadata } from './current-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameClientKeywordPage />;
}
