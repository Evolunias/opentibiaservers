import CurrentTibiameRegisterKeywordPage, { generateMetadata } from './current-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameRegisterKeywordPage />;
}
