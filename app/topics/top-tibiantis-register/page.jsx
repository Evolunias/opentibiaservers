import TopTibiantisRegisterKeywordPage, { generateMetadata } from './top-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisRegisterKeywordPage />;
}
