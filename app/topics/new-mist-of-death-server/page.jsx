import NewMistOfDeathServerKeywordPage, { generateMetadata } from './new-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMistOfDeathServerKeywordPage />;
}
