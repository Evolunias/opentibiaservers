import AlasteraNoResetServerUkKeywordPage, { generateMetadata } from './alastera-no-reset-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraNoResetServerUkKeywordPage />;
}
