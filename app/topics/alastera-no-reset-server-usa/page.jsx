import AlasteraNoResetServerUsaKeywordPage, { generateMetadata } from './alastera-no-reset-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraNoResetServerUsaKeywordPage />;
}
