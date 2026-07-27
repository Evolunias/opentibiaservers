import CurrentMidhemPrivateServerKeywordPage, { generateMetadata } from './current-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemPrivateServerKeywordPage />;
}
