import NewRealeraOtsKeywordPage, { generateMetadata } from './new-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraOtsKeywordPage />;
}
