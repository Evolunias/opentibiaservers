import PopularCarlinotPrivateServerKeywordPage, { generateMetadata } from './popular-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotPrivateServerKeywordPage />;
}
