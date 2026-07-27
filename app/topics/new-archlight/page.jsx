import NewArchlightKeywordPage, { generateMetadata } from './new-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightKeywordPage />;
}
