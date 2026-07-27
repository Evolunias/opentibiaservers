import HighrateTibiascapeKeywordPage, { generateMetadata } from './highrate-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeKeywordPage />;
}
