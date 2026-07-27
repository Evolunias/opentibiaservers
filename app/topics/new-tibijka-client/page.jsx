import NewTibijkaClientKeywordPage, { generateMetadata } from './new-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaClientKeywordPage />;
}
