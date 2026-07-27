import NewImperianicKeywordPage, { generateMetadata } from './new-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicKeywordPage />;
}
