import NoResetSerenityKeywordPage, { generateMetadata } from './no-reset-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityKeywordPage />;
}
