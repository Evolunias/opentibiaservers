import NewOxygenotKeywordPage, { generateMetadata } from './new-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotKeywordPage />;
}
