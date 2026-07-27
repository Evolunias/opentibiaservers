import NewMistOfDeathPrivateServerKeywordPage, { generateMetadata } from './new-mist-of-death-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMistOfDeathPrivateServerKeywordPage />;
}
