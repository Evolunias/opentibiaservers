import FreshStartTibianusTibiaKeywordPage, { generateMetadata } from './fresh-start-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusTibiaKeywordPage />;
}
