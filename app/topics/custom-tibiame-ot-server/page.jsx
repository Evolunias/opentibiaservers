import CustomTibiameOtServerKeywordPage, { generateMetadata } from './custom-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameOtServerKeywordPage />;
}
