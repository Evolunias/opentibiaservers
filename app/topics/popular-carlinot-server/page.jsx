import PopularCarlinotServerKeywordPage, { generateMetadata } from './popular-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotServerKeywordPage />;
}
