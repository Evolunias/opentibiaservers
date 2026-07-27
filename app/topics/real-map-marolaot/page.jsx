import RealMapMarolaotKeywordPage, { generateMetadata } from './real-map-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMarolaotKeywordPage />;
}
