import NoResetNtoStarLoginKeywordPage, { generateMetadata } from './no-reset-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarLoginKeywordPage />;
}
