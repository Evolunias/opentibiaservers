import OfficialOlderaKeywordPage, { generateMetadata } from './official-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaKeywordPage />;
}
