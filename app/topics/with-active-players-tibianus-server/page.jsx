import WithActivePlayersTibianusServerKeywordPage, { generateMetadata } from './with-active-players-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibianusServerKeywordPage />;
}
