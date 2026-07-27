import CurrentTibiantisPrivateServerKeywordPage, { generateMetadata } from './current-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisPrivateServerKeywordPage />;
}
