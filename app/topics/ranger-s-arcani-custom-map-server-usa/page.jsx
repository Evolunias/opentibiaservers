import RangerSArcaniCustomMapServerUsaKeywordPage, { generateMetadata } from './ranger-s-arcani-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniCustomMapServerUsaKeywordPage />;
}
