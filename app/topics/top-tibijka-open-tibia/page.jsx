import TopTibijkaOpenTibiaKeywordPage, { generateMetadata } from './top-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaOpenTibiaKeywordPage />;
}
