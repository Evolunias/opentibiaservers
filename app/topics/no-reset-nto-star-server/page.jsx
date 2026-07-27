import NoResetNtoStarServerKeywordPage, { generateMetadata } from './no-reset-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarServerKeywordPage />;
}
