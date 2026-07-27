import CurrentDemolidoresWebsiteKeywordPage, { generateMetadata } from './current-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresWebsiteKeywordPage />;
}
