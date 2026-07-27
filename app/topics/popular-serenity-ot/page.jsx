import PopularSerenityOtKeywordPage, { generateMetadata } from './popular-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityOtKeywordPage />;
}
