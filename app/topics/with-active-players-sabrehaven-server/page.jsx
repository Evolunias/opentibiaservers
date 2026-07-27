import WithActivePlayersSabrehavenServerKeywordPage, { generateMetadata } from './with-active-players-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSabrehavenServerKeywordPage />;
}
