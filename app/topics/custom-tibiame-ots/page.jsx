import CustomTibiameOtsKeywordPage, { generateMetadata } from './custom-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameOtsKeywordPage />;
}
