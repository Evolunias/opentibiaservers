import FreshStartTibiantisOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisOpenTibiaKeywordPage />;
}
