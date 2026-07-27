import NoResetThaisotPrivateServerKeywordPage, { generateMetadata } from './no-reset-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotPrivateServerKeywordPage />;
}
