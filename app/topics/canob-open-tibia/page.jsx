import CanobOpenTibiaKeywordPage, { generateMetadata } from './canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobOpenTibiaKeywordPage />;
}
