import RealMapSerenityOpenTibiaKeywordPage, { generateMetadata } from './real-map-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityOpenTibiaKeywordPage />;
}
