import CustomTibiameClientKeywordPage, { generateMetadata } from './custom-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameClientKeywordPage />;
}
