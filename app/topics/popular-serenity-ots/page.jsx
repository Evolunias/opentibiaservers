import PopularSerenityOtsKeywordPage, { generateMetadata } from './popular-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityOtsKeywordPage />;
}
