import TopXanteriaRegisterKeywordPage, { generateMetadata } from './top-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaRegisterKeywordPage />;
}
