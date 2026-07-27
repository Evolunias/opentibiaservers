import TopMistOfDeathPrivateServerKeywordPage, { generateMetadata } from './top-mist-of-death-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMistOfDeathPrivateServerKeywordPage />;
}
