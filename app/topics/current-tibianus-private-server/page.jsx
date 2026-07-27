import CurrentTibianusPrivateServerKeywordPage, { generateMetadata } from './current-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusPrivateServerKeywordPage />;
}
