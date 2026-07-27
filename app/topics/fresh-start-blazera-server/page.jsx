import FreshStartBlazeraServerKeywordPage, { generateMetadata } from './fresh-start-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraServerKeywordPage />;
}
