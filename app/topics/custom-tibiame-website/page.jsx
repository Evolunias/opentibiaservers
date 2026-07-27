import CustomTibiameWebsiteKeywordPage, { generateMetadata } from './custom-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameWebsiteKeywordPage />;
}
