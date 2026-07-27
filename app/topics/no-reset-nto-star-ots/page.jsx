import NoResetNtoStarOtsKeywordPage, { generateMetadata } from './no-reset-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarOtsKeywordPage />;
}
