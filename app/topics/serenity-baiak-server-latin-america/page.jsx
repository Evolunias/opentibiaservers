import SerenityBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './serenity-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityBaiakServerLatinAmericaKeywordPage />;
}
