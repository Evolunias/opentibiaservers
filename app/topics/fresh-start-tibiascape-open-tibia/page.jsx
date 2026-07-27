import FreshStartTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeOpenTibiaKeywordPage />;
}
