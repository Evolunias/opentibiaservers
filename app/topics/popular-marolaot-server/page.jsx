import PopularMarolaotServerKeywordPage, { generateMetadata } from './popular-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotServerKeywordPage />;
}
