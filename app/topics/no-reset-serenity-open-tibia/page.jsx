import NoResetSerenityOpenTibiaKeywordPage, { generateMetadata } from './no-reset-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityOpenTibiaKeywordPage />;
}
