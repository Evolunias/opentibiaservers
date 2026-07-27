import ThaisotPrivateServerKeywordPage, { generateMetadata } from './thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPrivateServerKeywordPage />;
}
