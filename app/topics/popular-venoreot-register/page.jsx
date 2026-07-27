import PopularVenoreotRegisterKeywordPage, { generateMetadata } from './popular-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotRegisterKeywordPage />;
}
