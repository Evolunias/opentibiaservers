import NewBlazeraOtsKeywordPage, { generateMetadata } from './new-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraOtsKeywordPage />;
}
