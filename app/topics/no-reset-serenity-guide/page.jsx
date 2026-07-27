import NoResetSerenityGuideKeywordPage, { generateMetadata } from './no-reset-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityGuideKeywordPage />;
}
