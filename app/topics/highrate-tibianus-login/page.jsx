import HighrateTibianusLoginKeywordPage, { generateMetadata } from './highrate-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusLoginKeywordPage />;
}
