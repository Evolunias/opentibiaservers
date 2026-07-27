import CustomTibiameKeywordPage, { generateMetadata } from './custom-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameKeywordPage />;
}
