import BlazeraCustomMapServersSwedenKeywordPage, { generateMetadata } from './blazera-custom-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServersSwedenKeywordPage />;
}
