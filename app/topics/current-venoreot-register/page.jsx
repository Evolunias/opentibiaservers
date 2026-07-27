import CurrentVenoreotRegisterKeywordPage, { generateMetadata } from './current-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotRegisterKeywordPage />;
}
