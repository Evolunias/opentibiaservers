import NewTibiaraClientKeywordPage, { generateMetadata } from './new-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraClientKeywordPage />;
}
