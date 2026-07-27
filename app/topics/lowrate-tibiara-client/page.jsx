import LowrateTibiaraClientKeywordPage, { generateMetadata } from './lowrate-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraClientKeywordPage />;
}
