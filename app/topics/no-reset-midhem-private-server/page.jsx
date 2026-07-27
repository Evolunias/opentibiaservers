import NoResetMidhemPrivateServerKeywordPage, { generateMetadata } from './no-reset-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemPrivateServerKeywordPage />;
}
