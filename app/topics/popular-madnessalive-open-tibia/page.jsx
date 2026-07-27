import PopularMadnessaliveOpenTibiaKeywordPage, { generateMetadata } from './popular-madnessalive-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveOpenTibiaKeywordPage />;
}
