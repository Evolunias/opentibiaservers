import ActiveBlazeraGuideKeywordPage, { generateMetadata } from './active-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraGuideKeywordPage />;
}
