import FreshStartBlazeraOtsKeywordPage, { generateMetadata } from './fresh-start-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraOtsKeywordPage />;
}
