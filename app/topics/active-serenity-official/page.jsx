import ActiveSerenityOfficialKeywordPage, { generateMetadata } from './active-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityOfficialKeywordPage />;
}
