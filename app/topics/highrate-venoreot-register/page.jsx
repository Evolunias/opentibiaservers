import HighrateVenoreotRegisterKeywordPage, { generateMetadata } from './highrate-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotRegisterKeywordPage />;
}
