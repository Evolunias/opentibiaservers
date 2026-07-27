import NoResetTibijkaGuideKeywordPage, { generateMetadata } from './no-reset-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaGuideKeywordPage />;
}
