import CurrentMistOfDeathServerKeywordPage, { generateMetadata } from './current-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMistOfDeathServerKeywordPage />;
}
