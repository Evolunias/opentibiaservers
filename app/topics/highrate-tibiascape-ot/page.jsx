import HighrateTibiascapeOtKeywordPage, { generateMetadata } from './highrate-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeOtKeywordPage />;
}
