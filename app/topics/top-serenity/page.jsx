import TopSerenityKeywordPage, { generateMetadata } from './top-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityKeywordPage />;
}
