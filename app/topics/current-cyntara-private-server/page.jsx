import CurrentCyntaraPrivateServerKeywordPage, { generateMetadata } from './current-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraPrivateServerKeywordPage />;
}
