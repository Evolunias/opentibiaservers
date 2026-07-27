import CustomMapLumineraServersKeywordPage, { generateMetadata } from './custom-map-luminera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLumineraServersKeywordPage />;
}
