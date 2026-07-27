import LowrateSerenityTibiaKeywordPage, { generateMetadata } from './lowrate-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityTibiaKeywordPage />;
}
