import NewTibiaraServerKeywordPage, { generateMetadata } from './new-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraServerKeywordPage />;
}
