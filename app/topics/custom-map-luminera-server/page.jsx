import CustomMapLumineraServerKeywordPage, { generateMetadata } from './custom-map-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLumineraServerKeywordPage />;
}
