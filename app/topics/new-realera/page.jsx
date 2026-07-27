import NewRealeraKeywordPage, { generateMetadata } from './new-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraKeywordPage />;
}
