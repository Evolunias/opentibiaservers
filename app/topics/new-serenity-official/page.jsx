import NewSerenityOfficialKeywordPage, { generateMetadata } from './new-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOfficialKeywordPage />;
}
