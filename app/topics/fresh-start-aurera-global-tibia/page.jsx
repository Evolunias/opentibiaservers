import FreshStartAureraGlobalTibiaKeywordPage, { generateMetadata } from './fresh-start-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAureraGlobalTibiaKeywordPage />;
}
