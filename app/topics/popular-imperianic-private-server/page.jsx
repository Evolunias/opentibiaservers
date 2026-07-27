import PopularImperianicPrivateServerKeywordPage, { generateMetadata } from './popular-imperianic-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicPrivateServerKeywordPage />;
}
