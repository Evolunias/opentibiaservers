import OfficialSaintsotPrivateServerKeywordPage, { generateMetadata } from './official-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotPrivateServerKeywordPage />;
}
