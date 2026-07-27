import WithActivePlayersTibiantisServerKeywordPage, { generateMetadata } from './with-active-players-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibiantisServerKeywordPage />;
}
