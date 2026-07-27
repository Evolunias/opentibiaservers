import CurrentEternalOdysseyKeywordPage, { generateMetadata } from './current-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyKeywordPage />;
}
