import NewTibianusTibiaKeywordPage, { generateMetadata } from './new-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusTibiaKeywordPage />;
}
