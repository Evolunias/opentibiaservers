import PopularSerenityKeywordPage, { generateMetadata } from './popular-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityKeywordPage />;
}
