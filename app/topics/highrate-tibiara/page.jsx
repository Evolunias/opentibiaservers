import HighrateTibiaraKeywordPage, { generateMetadata } from './highrate-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraKeywordPage />;
}
