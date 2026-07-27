import LowrateTibijkaLoginKeywordPage, { generateMetadata } from './lowrate-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaLoginKeywordPage />;
}
