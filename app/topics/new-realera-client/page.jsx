import NewRealeraClientKeywordPage, { generateMetadata } from './new-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraClientKeywordPage />;
}
