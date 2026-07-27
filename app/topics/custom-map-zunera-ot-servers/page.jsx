import CustomMapZuneraOtServersKeywordPage, { generateMetadata } from './custom-map-zunera-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapZuneraOtServersKeywordPage />;
}
