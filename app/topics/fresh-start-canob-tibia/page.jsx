import FreshStartCanobTibiaKeywordPage, { generateMetadata } from './fresh-start-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobTibiaKeywordPage />;
}
