import CurrentNilotClientKeywordPage, { generateMetadata } from './current-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotClientKeywordPage />;
}
