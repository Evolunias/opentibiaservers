import LowrateNtoStarOpenTibiaKeywordPage, { generateMetadata } from './lowrate-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarOpenTibiaKeywordPage />;
}
