import NewNepreniaServerKeywordPage, { generateMetadata } from './new-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaServerKeywordPage />;
}
