import TopImperianicRegisterKeywordPage, { generateMetadata } from './top-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicRegisterKeywordPage />;
}
