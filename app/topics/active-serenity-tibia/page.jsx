import ActiveSerenityTibiaKeywordPage, { generateMetadata } from './active-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityTibiaKeywordPage />;
}
