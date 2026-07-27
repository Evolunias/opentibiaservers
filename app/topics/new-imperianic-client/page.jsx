import NewImperianicClientKeywordPage, { generateMetadata } from './new-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicClientKeywordPage />;
}
