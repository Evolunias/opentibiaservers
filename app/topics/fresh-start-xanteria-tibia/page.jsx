import FreshStartXanteriaTibiaKeywordPage, { generateMetadata } from './fresh-start-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaTibiaKeywordPage />;
}
