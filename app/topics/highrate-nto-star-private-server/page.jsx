import HighrateNtoStarPrivateServerKeywordPage, { generateMetadata } from './highrate-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarPrivateServerKeywordPage />;
}
