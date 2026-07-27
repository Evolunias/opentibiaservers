import CustomTibianusTibiaKeywordPage, { generateMetadata } from './custom-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusTibiaKeywordPage />;
}
