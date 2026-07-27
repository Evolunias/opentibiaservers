import NewElderaPrivateServerKeywordPage, { generateMetadata } from './new-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaPrivateServerKeywordPage />;
}
