import NoResetTibianusTibiaKeywordPage, { generateMetadata } from './no-reset-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusTibiaKeywordPage />;
}
