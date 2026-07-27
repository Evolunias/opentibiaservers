import ActiveBlazeraServerKeywordPage, { generateMetadata } from './active-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraServerKeywordPage />;
}
