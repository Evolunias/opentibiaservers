import FreshStartKasteriaTibiaKeywordPage, { generateMetadata } from './fresh-start-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaTibiaKeywordPage />;
}
