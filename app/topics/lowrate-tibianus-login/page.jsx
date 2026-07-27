import LowrateTibianusLoginKeywordPage, { generateMetadata } from './lowrate-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusLoginKeywordPage />;
}
