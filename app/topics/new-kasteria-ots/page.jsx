import NewKasteriaOtsKeywordPage, { generateMetadata } from './new-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaOtsKeywordPage />;
}
