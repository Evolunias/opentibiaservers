import ActiveSerenityKeywordPage, { generateMetadata } from './active-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityKeywordPage />;
}
