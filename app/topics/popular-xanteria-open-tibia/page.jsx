import PopularXanteriaOpenTibiaKeywordPage, { generateMetadata } from './popular-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaOpenTibiaKeywordPage />;
}
