import ActiveOlderaKeywordPage, { generateMetadata } from './active-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaKeywordPage />;
}
