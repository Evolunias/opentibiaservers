import LowrateVenoreotRegisterKeywordPage, { generateMetadata } from './lowrate-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotRegisterKeywordPage />;
}
