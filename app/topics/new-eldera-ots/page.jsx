import NewElderaOtsKeywordPage, { generateMetadata } from './new-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaOtsKeywordPage />;
}
