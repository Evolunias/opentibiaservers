import LowrateNtoStarTibiaKeywordPage, { generateMetadata } from './lowrate-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarTibiaKeywordPage />;
}
