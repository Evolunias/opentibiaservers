import FreshStartNepreniaTibiaKeywordPage, { generateMetadata } from './fresh-start-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaTibiaKeywordPage />;
}
