import CurrentNilotPrivateServerKeywordPage, { generateMetadata } from './current-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotPrivateServerKeywordPage />;
}
