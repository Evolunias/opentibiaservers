import FreshStartThorniaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaOpenTibiaKeywordPage />;
}
