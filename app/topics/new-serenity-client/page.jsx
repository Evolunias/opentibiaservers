import NewSerenityClientKeywordPage, { generateMetadata } from './new-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityClientKeywordPage />;
}
