import FreshStartTibiaraServerKeywordPage, { generateMetadata } from './fresh-start-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraServerKeywordPage />;
}
