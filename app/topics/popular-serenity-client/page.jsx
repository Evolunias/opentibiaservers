import PopularSerenityClientKeywordPage, { generateMetadata } from './popular-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityClientKeywordPage />;
}
