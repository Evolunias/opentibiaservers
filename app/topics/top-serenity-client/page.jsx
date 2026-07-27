import TopSerenityClientKeywordPage, { generateMetadata } from './top-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityClientKeywordPage />;
}
