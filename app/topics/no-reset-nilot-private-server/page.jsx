import NoResetNilotPrivateServerKeywordPage, { generateMetadata } from './no-reset-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotPrivateServerKeywordPage />;
}
