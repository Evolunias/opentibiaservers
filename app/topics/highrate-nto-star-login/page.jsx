import HighrateNtoStarLoginKeywordPage, { generateMetadata } from './highrate-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarLoginKeywordPage />;
}
