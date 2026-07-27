import PopularTibiaraRegisterKeywordPage, { generateMetadata } from './popular-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraRegisterKeywordPage />;
}
