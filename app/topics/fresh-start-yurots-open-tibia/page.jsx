import FreshStartYurotsOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsOpenTibiaKeywordPage />;
}
