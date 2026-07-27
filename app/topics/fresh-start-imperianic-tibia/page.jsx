import FreshStartImperianicTibiaKeywordPage, { generateMetadata } from './fresh-start-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicTibiaKeywordPage />;
}
