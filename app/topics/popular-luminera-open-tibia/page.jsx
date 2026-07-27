import PopularLumineraOpenTibiaKeywordPage, { generateMetadata } from './popular-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraOpenTibiaKeywordPage />;
}
