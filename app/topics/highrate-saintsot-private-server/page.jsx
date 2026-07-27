import HighrateSaintsotPrivateServerKeywordPage, { generateMetadata } from './highrate-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotPrivateServerKeywordPage />;
}
