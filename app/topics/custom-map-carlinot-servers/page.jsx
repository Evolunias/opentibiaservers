import CustomMapCarlinotServersKeywordPage, { generateMetadata } from './custom-map-carlinot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCarlinotServersKeywordPage />;
}
