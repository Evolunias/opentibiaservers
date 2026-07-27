import TibianusTibiaKeywordPage, { generateMetadata } from './tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusTibiaKeywordPage />;
}
