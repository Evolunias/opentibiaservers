import ActiveNtoStarLoginKeywordPage, { generateMetadata } from './active-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarLoginKeywordPage />;
}
