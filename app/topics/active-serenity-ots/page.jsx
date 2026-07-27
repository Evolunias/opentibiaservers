import ActiveSerenityOtsKeywordPage, { generateMetadata } from './active-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityOtsKeywordPage />;
}
