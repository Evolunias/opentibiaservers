import NoResetNtoStarGuideKeywordPage, { generateMetadata } from './no-reset-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarGuideKeywordPage />;
}
