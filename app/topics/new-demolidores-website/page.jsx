import NewDemolidoresWebsiteKeywordPage, { generateMetadata } from './new-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresWebsiteKeywordPage />;
}
