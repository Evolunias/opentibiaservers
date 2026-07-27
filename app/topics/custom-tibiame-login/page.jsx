import CustomTibiameLoginKeywordPage, { generateMetadata } from './custom-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameLoginKeywordPage />;
}
