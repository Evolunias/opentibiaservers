import CurrentNtoStarLoginKeywordPage, { generateMetadata } from './current-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarLoginKeywordPage />;
}
