import FreshStartMistOfDeathServerKeywordPage, { generateMetadata } from './fresh-start-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMistOfDeathServerKeywordPage />;
}
