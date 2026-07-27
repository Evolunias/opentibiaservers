import FreshStartEvoleraTibiaKeywordPage, { generateMetadata } from './fresh-start-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraTibiaKeywordPage />;
}
