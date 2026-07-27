import AlasteraCustomMapServerGermanyKeywordPage, { generateMetadata } from './alastera-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraCustomMapServerGermanyKeywordPage />;
}
