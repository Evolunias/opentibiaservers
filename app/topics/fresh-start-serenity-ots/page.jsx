import FreshStartSerenityOtsKeywordPage, { generateMetadata } from './fresh-start-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityOtsKeywordPage />;
}
