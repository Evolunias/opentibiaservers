import LowrateTibiaraKeywordPage, { generateMetadata } from './lowrate-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraKeywordPage />;
}
