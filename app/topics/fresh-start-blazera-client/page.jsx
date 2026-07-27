import FreshStartBlazeraClientKeywordPage, { generateMetadata } from './fresh-start-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraClientKeywordPage />;
}
