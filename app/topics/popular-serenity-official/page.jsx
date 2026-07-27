import PopularSerenityOfficialKeywordPage, { generateMetadata } from './popular-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityOfficialKeywordPage />;
}
