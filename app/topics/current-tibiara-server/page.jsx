import CurrentTibiaraServerKeywordPage, { generateMetadata } from './current-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraServerKeywordPage />;
}
