import LowrateSerenityOfficialKeywordPage, { generateMetadata } from './lowrate-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityOfficialKeywordPage />;
}
