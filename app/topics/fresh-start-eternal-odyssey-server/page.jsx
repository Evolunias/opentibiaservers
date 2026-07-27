import FreshStartEternalOdysseyServerKeywordPage, { generateMetadata } from './fresh-start-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEternalOdysseyServerKeywordPage />;
}
