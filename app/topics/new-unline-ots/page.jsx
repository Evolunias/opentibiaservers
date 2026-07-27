import NewUnlineOtsKeywordPage, { generateMetadata } from './new-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineOtsKeywordPage />;
}
