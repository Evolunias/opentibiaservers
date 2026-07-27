import PopularEternalOdysseyTibiaKeywordPage, { generateMetadata } from './popular-eternal-odyssey-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEternalOdysseyTibiaKeywordPage />;
}
