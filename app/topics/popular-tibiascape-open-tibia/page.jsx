import PopularTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './popular-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeOpenTibiaKeywordPage />;
}
