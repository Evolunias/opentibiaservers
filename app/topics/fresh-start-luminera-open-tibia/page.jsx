import FreshStartLumineraOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraOpenTibiaKeywordPage />;
}
