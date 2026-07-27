import PopularKasteriaPrivateServerKeywordPage, { generateMetadata } from './popular-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaPrivateServerKeywordPage />;
}
