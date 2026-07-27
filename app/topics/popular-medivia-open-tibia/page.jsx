import PopularMediviaOpenTibiaKeywordPage, { generateMetadata } from './popular-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaOpenTibiaKeywordPage />;
}
