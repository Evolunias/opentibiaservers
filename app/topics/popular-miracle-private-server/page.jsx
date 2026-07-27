import PopularMiraclePrivateServerKeywordPage, { generateMetadata } from './popular-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiraclePrivateServerKeywordPage />;
}
