import NoResetAmeriaPrivateServerKeywordPage, { generateMetadata } from './no-reset-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaPrivateServerKeywordPage />;
}
