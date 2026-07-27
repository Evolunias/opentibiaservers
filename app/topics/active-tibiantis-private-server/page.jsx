import ActiveTibiantisPrivateServerKeywordPage, { generateMetadata } from './active-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisPrivateServerKeywordPage />;
}
