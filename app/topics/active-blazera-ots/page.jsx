import ActiveBlazeraOtsKeywordPage, { generateMetadata } from './active-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraOtsKeywordPage />;
}
