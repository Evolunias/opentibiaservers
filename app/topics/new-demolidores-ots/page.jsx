import NewDemolidoresOtsKeywordPage, { generateMetadata } from './new-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresOtsKeywordPage />;
}
