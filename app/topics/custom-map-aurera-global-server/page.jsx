import CustomMapAureraGlobalServerKeywordPage, { generateMetadata } from './custom-map-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapAureraGlobalServerKeywordPage />;
}
