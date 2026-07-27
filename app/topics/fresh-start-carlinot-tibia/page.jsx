import FreshStartCarlinotTibiaKeywordPage, { generateMetadata } from './fresh-start-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotTibiaKeywordPage />;
}
