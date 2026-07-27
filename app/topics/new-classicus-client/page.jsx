import NewClassicusClientKeywordPage, { generateMetadata } from './new-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusClientKeywordPage />;
}
