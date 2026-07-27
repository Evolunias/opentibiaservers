import CurrentTibiaraKeywordPage, { generateMetadata } from './current-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraKeywordPage />;
}
