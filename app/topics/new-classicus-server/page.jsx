import NewClassicusServerKeywordPage, { generateMetadata } from './new-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusServerKeywordPage />;
}
