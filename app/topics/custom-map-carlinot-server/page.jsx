import CustomMapCarlinotServerKeywordPage, { generateMetadata } from './custom-map-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCarlinotServerKeywordPage />;
}
