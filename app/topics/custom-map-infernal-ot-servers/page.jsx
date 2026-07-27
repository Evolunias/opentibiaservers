import CustomMapInfernalOtServersKeywordPage, { generateMetadata } from './custom-map-infernal-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapInfernalOtServersKeywordPage />;
}
