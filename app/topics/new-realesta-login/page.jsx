import NewRealestaLoginKeywordPage, { generateMetadata } from './new-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaLoginKeywordPage />;
}
