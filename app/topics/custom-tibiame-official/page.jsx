import CustomTibiameOfficialKeywordPage, { generateMetadata } from './custom-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameOfficialKeywordPage />;
}
