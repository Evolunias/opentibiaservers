import ActiveBlazeraPrivateServerKeywordPage, { generateMetadata } from './active-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraPrivateServerKeywordPage />;
}
