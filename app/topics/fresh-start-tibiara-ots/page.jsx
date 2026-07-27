import FreshStartTibiaraOtsKeywordPage, { generateMetadata } from './fresh-start-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraOtsKeywordPage />;
}
