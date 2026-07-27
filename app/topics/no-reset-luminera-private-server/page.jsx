import NoResetLumineraPrivateServerKeywordPage, { generateMetadata } from './no-reset-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraPrivateServerKeywordPage />;
}
