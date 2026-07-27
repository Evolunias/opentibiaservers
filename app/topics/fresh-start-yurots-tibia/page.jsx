import FreshStartYurotsTibiaKeywordPage, { generateMetadata } from './fresh-start-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsTibiaKeywordPage />;
}
