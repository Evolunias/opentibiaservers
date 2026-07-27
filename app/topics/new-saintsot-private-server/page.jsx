import NewSaintsotPrivateServerKeywordPage, { generateMetadata } from './new-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotPrivateServerKeywordPage />;
}
