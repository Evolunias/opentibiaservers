import NewClassicusLoginKeywordPage, { generateMetadata } from './new-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusLoginKeywordPage />;
}
