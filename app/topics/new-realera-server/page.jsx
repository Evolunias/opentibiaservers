import NewRealeraServerKeywordPage, { generateMetadata } from './new-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraServerKeywordPage />;
}
