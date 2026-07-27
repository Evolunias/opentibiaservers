import TopTibiascapeRegisterKeywordPage, { generateMetadata } from './top-tibiascape-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeRegisterKeywordPage />;
}
