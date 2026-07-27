import NoResetUnlinePrivateServerKeywordPage, { generateMetadata } from './no-reset-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlinePrivateServerKeywordPage />;
}
