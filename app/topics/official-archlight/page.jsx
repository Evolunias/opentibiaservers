import OfficialArchlightKeywordPage, { generateMetadata } from './official-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightKeywordPage />;
}
