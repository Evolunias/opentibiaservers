import FreshStartTibiaraClientKeywordPage, { generateMetadata } from './fresh-start-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraClientKeywordPage />;
}
