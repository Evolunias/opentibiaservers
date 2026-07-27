import LowrateSerenityOpenTibiaKeywordPage, { generateMetadata } from './lowrate-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityOpenTibiaKeywordPage />;
}
