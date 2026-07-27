import NewTibianusOtsKeywordPage, { generateMetadata } from './new-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusOtsKeywordPage />;
}
