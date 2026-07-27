import NoResetSerenityLoginKeywordPage, { generateMetadata } from './no-reset-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityLoginKeywordPage />;
}
