import ActiveSerenityClientKeywordPage, { generateMetadata } from './active-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityClientKeywordPage />;
}
