import NewVenoreotRegisterKeywordPage, { generateMetadata } from './new-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotRegisterKeywordPage />;
}
