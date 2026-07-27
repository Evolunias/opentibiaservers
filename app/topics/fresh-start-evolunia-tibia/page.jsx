import FreshStartEvoluniaTibiaKeywordPage, { generateMetadata } from './fresh-start-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaTibiaKeywordPage />;
}
