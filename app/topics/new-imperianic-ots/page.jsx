import NewImperianicOtsKeywordPage, { generateMetadata } from './new-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicOtsKeywordPage />;
}
