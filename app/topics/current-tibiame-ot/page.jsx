import CurrentTibiameOtKeywordPage, { generateMetadata } from './current-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameOtKeywordPage />;
}
