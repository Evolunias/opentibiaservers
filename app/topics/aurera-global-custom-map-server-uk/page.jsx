import AureraGlobalCustomMapServerUkKeywordPage, { generateMetadata } from './aurera-global-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalCustomMapServerUkKeywordPage />;
}
