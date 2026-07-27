import HighrateSerenityOfficialKeywordPage, { generateMetadata } from './highrate-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOfficialKeywordPage />;
}
