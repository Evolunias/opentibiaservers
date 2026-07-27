import BestVenoreotRegisterKeywordPage, { generateMetadata } from './best-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotRegisterKeywordPage />;
}
