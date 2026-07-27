import CurrentCanobWebsiteKeywordPage, { generateMetadata } from './current-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobWebsiteKeywordPage />;
}
