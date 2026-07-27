import FreshStartBlazeraKeywordPage, { generateMetadata } from './fresh-start-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraKeywordPage />;
}
