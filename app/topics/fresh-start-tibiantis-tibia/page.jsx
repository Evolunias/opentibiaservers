import FreshStartTibiantisTibiaKeywordPage, { generateMetadata } from './fresh-start-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisTibiaKeywordPage />;
}
