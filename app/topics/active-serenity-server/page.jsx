import ActiveSerenityServerKeywordPage, { generateMetadata } from './active-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityServerKeywordPage />;
}
