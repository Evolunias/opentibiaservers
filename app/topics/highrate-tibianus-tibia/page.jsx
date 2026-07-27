import HighrateTibianusTibiaKeywordPage, { generateMetadata } from './highrate-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusTibiaKeywordPage />;
}
