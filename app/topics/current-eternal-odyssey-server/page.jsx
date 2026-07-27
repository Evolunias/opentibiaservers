import CurrentEternalOdysseyServerKeywordPage, { generateMetadata } from './current-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyServerKeywordPage />;
}
