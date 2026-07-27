import FreshStartKasteriaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaOpenTibiaKeywordPage />;
}
