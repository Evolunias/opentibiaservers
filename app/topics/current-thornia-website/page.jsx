import CurrentThorniaWebsiteKeywordPage, { generateMetadata } from './current-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaWebsiteKeywordPage />;
}
