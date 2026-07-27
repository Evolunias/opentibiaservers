import HighrateTibiantisLoginKeywordPage, { generateMetadata } from './highrate-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisLoginKeywordPage />;
}
