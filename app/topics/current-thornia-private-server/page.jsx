import CurrentThorniaPrivateServerKeywordPage, { generateMetadata } from './current-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaPrivateServerKeywordPage />;
}
