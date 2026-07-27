import NoResetSerenityTibiaKeywordPage, { generateMetadata } from './no-reset-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityTibiaKeywordPage />;
}
