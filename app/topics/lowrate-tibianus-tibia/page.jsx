import LowrateTibianusTibiaKeywordPage, { generateMetadata } from './lowrate-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusTibiaKeywordPage />;
}
