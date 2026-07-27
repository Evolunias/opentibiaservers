import NewSerenityOtsKeywordPage, { generateMetadata } from './new-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOtsKeywordPage />;
}
