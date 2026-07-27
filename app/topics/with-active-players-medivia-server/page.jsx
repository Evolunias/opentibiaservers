import WithActivePlayersMediviaServerKeywordPage, { generateMetadata } from './with-active-players-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersMediviaServerKeywordPage />;
}
