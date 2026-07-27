import PopularTibiameRegisterKeywordPage, { generateMetadata } from './popular-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameRegisterKeywordPage />;
}
