import VenoreotRetroServerNorthAmericaKeywordPage, { generateMetadata } from './venoreot-retro-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerNorthAmericaKeywordPage />;
}
