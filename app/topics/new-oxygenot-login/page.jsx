import NewOxygenotLoginKeywordPage, { generateMetadata } from './new-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotLoginKeywordPage />;
}
