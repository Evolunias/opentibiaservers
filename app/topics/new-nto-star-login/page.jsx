import NewNtoStarLoginKeywordPage, { generateMetadata } from './new-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarLoginKeywordPage />;
}
