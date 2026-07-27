import FreshStartBlazeraGuideKeywordPage, { generateMetadata } from './fresh-start-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraGuideKeywordPage />;
}
