import TopSerenityOtsKeywordPage, { generateMetadata } from './top-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityOtsKeywordPage />;
}
