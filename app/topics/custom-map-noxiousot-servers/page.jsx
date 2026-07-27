import CustomMapNoxiousotServersKeywordPage, { generateMetadata } from './custom-map-noxiousot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNoxiousotServersKeywordPage />;
}
