import NewSerenityKeywordPage, { generateMetadata } from './new-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityKeywordPage />;
}
