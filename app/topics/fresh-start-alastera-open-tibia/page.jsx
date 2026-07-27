import FreshStartAlasteraOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraOpenTibiaKeywordPage />;
}
