import ActiveAureraGlobalPrivateServerKeywordPage, { generateMetadata } from './active-aurera-global-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalPrivateServerKeywordPage />;
}
