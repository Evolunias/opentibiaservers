import FreshStartTibiaraKeywordPage, { generateMetadata } from './fresh-start-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraKeywordPage />;
}
