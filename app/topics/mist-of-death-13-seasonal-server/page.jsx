import MistOfDeath13SeasonalServerKeywordPage, { generateMetadata } from './mist-of-death-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeath13SeasonalServerKeywordPage />;
}
