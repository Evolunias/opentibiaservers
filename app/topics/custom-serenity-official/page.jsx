import CustomSerenityOfficialKeywordPage, { generateMetadata } from './custom-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityOfficialKeywordPage />;
}
