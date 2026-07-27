import NoResetSaintsotPrivateServerKeywordPage, { generateMetadata } from './no-reset-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotPrivateServerKeywordPage />;
}
