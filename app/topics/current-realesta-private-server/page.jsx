import CurrentRealestaPrivateServerKeywordPage, { generateMetadata } from './current-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaPrivateServerKeywordPage />;
}
