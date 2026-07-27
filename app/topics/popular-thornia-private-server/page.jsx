import PopularThorniaPrivateServerKeywordPage, { generateMetadata } from './popular-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaPrivateServerKeywordPage />;
}
