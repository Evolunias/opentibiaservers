import PopularMiracleKeywordPage, { generateMetadata } from './popular-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleKeywordPage />;
}
