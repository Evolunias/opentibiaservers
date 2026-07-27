import NewSerenityOtKeywordPage, { generateMetadata } from './new-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOtKeywordPage />;
}
