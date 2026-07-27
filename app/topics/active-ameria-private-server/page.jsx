import ActiveAmeriaPrivateServerKeywordPage, { generateMetadata } from './active-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaPrivateServerKeywordPage />;
}
