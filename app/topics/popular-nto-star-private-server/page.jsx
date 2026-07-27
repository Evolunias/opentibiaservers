import PopularNtoStarPrivateServerKeywordPage, { generateMetadata } from './popular-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarPrivateServerKeywordPage />;
}
