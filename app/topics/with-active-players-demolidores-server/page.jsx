import WithActivePlayersDemolidoresServerKeywordPage, { generateMetadata } from './with-active-players-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDemolidoresServerKeywordPage />;
}
