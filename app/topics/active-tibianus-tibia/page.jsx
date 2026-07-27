import ActiveTibianusTibiaKeywordPage, { generateMetadata } from './active-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusTibiaKeywordPage />;
}
