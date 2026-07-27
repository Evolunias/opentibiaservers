import CurrentNilotLoginKeywordPage, { generateMetadata } from './current-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotLoginKeywordPage />;
}
