import HighrateTibiaraServerKeywordPage, { generateMetadata } from './highrate-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraServerKeywordPage />;
}
