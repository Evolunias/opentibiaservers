import NoResetNtoStarKeywordPage, { generateMetadata } from './no-reset-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarKeywordPage />;
}
