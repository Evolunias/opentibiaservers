import AlasteraNoResetServerEuropeKeywordPage, { generateMetadata } from './alastera-no-reset-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraNoResetServerEuropeKeywordPage />;
}
