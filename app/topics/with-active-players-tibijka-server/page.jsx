import WithActivePlayersTibijkaServerKeywordPage, { generateMetadata } from './with-active-players-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibijkaServerKeywordPage />;
}
