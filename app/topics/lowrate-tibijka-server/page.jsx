import LowrateTibijkaServerKeywordPage, { generateMetadata } from './lowrate-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaServerKeywordPage />;
}
