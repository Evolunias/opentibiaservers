import NewTibiantisOtsKeywordPage, { generateMetadata } from './new-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisOtsKeywordPage />;
}
