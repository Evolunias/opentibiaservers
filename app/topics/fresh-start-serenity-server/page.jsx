import FreshStartSerenityServerKeywordPage, { generateMetadata } from './fresh-start-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityServerKeywordPage />;
}
