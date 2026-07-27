import FreshStartAlasteraTibiaKeywordPage, { generateMetadata } from './fresh-start-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraTibiaKeywordPage />;
}
