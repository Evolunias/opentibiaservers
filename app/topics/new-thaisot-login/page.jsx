import NewThaisotLoginKeywordPage, { generateMetadata } from './new-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotLoginKeywordPage />;
}
