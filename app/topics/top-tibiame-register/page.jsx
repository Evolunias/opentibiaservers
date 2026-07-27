import TopTibiameRegisterKeywordPage, { generateMetadata } from './top-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameRegisterKeywordPage />;
}
