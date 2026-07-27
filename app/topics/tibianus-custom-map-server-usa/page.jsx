import TibianusCustomMapServerUsaKeywordPage, { generateMetadata } from './tibianus-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerUsaKeywordPage />;
}
