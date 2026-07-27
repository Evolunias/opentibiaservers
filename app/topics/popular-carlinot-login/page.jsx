import PopularCarlinotLoginKeywordPage, { generateMetadata } from './popular-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotLoginKeywordPage />;
}
