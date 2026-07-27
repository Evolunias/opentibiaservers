import CurrentTibiaraClientKeywordPage, { generateMetadata } from './current-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraClientKeywordPage />;
}
