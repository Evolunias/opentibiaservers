import CurrentSerenityOfficialKeywordPage, { generateMetadata } from './current-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityOfficialKeywordPage />;
}
