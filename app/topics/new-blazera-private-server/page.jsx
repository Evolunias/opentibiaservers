import NewBlazeraPrivateServerKeywordPage, { generateMetadata } from './new-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraPrivateServerKeywordPage />;
}
