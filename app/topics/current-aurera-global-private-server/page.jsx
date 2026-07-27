import CurrentAureraGlobalPrivateServerKeywordPage, { generateMetadata } from './current-aurera-global-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalPrivateServerKeywordPage />;
}
