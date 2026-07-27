import MistOfDeathEuropeServerKeywordPage, { generateMetadata } from './mist-of-death-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathEuropeServerKeywordPage />;
}
