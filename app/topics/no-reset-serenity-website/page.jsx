import NoResetSerenityWebsiteKeywordPage, { generateMetadata } from './no-reset-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityWebsiteKeywordPage />;
}
