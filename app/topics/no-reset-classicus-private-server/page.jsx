import NoResetClassicusPrivateServerKeywordPage, { generateMetadata } from './no-reset-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusPrivateServerKeywordPage />;
}
