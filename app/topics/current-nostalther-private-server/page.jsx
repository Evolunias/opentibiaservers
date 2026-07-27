import CurrentNostaltherPrivateServerKeywordPage, { generateMetadata } from './current-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherPrivateServerKeywordPage />;
}
