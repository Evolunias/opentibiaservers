import FreshStartBlazeraPrivateServerKeywordPage, { generateMetadata } from './fresh-start-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraPrivateServerKeywordPage />;
}
