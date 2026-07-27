import BestClassicusPrivateServerKeywordPage, { generateMetadata } from './best-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusPrivateServerKeywordPage />;
}
