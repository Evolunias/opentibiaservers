import PopularRubinotRegisterKeywordPage, { generateMetadata } from './popular-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotRegisterKeywordPage />;
}
