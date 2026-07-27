import BestNilotPrivateServerKeywordPage, { generateMetadata } from './best-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotPrivateServerKeywordPage />;
}
