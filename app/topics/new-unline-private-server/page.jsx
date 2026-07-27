import NewUnlinePrivateServerKeywordPage, { generateMetadata } from './new-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlinePrivateServerKeywordPage />;
}
