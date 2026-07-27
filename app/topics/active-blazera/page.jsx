import ActiveBlazeraKeywordPage, { generateMetadata } from './active-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraKeywordPage />;
}
