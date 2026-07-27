import WithActivePlayersSaintsotServerKeywordPage, { generateMetadata } from './with-active-players-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSaintsotServerKeywordPage />;
}
