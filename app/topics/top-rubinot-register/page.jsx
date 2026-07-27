import TopRubinotRegisterKeywordPage, { generateMetadata } from './top-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotRegisterKeywordPage />;
}
