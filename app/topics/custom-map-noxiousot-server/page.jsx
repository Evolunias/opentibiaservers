import CustomMapNoxiousotServerKeywordPage, { generateMetadata } from './custom-map-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNoxiousotServerKeywordPage />;
}
