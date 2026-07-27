import OfficialVenoreotRegisterKeywordPage, { generateMetadata } from './official-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotRegisterKeywordPage />;
}
