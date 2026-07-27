import CurrentLumineraPrivateServerKeywordPage, { generateMetadata } from './current-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraPrivateServerKeywordPage />;
}
