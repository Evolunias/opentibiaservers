import FreshStartBlazeraOtKeywordPage, { generateMetadata } from './fresh-start-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraOtKeywordPage />;
}
