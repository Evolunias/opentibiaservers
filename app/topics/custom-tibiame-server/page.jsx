import CustomTibiameServerKeywordPage, { generateMetadata } from './custom-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameServerKeywordPage />;
}
