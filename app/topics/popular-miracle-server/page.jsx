import PopularMiracleServerKeywordPage, { generateMetadata } from './popular-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleServerKeywordPage />;
}
