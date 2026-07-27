import NoResetBlazeraGuideKeywordPage, { generateMetadata } from './no-reset-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraGuideKeywordPage />;
}
