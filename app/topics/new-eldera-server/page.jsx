import NewElderaServerKeywordPage, { generateMetadata } from './new-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaServerKeywordPage />;
}
