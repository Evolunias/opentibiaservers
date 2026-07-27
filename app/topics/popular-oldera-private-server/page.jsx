import PopularOlderaPrivateServerKeywordPage, { generateMetadata } from './popular-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaPrivateServerKeywordPage />;
}
