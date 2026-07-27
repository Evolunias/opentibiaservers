import PopularUnlinePrivateServerKeywordPage, { generateMetadata } from './popular-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlinePrivateServerKeywordPage />;
}
