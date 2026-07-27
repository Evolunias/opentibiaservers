import CustomTibiameOpenTibiaKeywordPage, { generateMetadata } from './custom-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameOpenTibiaKeywordPage />;
}
