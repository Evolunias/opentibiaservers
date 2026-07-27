import NoResetXanteriaPrivateServerKeywordPage, { generateMetadata } from './no-reset-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaPrivateServerKeywordPage />;
}
