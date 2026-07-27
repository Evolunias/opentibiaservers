import CurrentClassicusPrivateServerKeywordPage, { generateMetadata } from './current-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusPrivateServerKeywordPage />;
}
