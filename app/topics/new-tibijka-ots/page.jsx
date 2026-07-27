import NewTibijkaOtsKeywordPage, { generateMetadata } from './new-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaOtsKeywordPage />;
}
