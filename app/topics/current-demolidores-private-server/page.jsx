import CurrentDemolidoresPrivateServerKeywordPage, { generateMetadata } from './current-demolidores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresPrivateServerKeywordPage />;
}
