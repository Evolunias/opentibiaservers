import NewClassicusPrivateServerKeywordPage, { generateMetadata } from './new-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusPrivateServerKeywordPage />;
}
