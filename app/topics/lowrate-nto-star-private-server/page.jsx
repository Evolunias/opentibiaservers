import LowrateNtoStarPrivateServerKeywordPage, { generateMetadata } from './lowrate-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarPrivateServerKeywordPage />;
}
