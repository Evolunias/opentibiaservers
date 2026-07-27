import LowrateNostaltherWikiKeywordPage, { generateMetadata } from './lowrate-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherWikiKeywordPage />;
}
