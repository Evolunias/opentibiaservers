import TibianusCustomMapServerUkKeywordPage, { generateMetadata } from './tibianus-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerUkKeywordPage />;
}
