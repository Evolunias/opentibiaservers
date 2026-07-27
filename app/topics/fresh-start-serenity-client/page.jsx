import FreshStartSerenityClientKeywordPage, { generateMetadata } from './fresh-start-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityClientKeywordPage />;
}
