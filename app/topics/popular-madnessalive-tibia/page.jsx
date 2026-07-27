import PopularMadnessaliveTibiaKeywordPage, { generateMetadata } from './popular-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveTibiaKeywordPage />;
}
