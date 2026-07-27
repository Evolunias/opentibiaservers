import TopAureraGlobalPrivateServerKeywordPage, { generateMetadata } from './top-aurera-global-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalPrivateServerKeywordPage />;
}
