import ActiveSaintsotPrivateServerKeywordPage, { generateMetadata } from './active-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotPrivateServerKeywordPage />;
}
