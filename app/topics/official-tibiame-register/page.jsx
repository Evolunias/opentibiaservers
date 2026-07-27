import OfficialTibiameRegisterKeywordPage, { generateMetadata } from './official-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameRegisterKeywordPage />;
}
