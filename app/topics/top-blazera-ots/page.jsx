import TopBlazeraOtsKeywordPage, { generateMetadata } from './top-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraOtsKeywordPage />;
}
