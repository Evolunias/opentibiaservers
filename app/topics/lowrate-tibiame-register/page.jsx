import LowrateTibiameRegisterKeywordPage, { generateMetadata } from './lowrate-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameRegisterKeywordPage />;
}
