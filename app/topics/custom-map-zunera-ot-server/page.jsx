import CustomMapZuneraOtServerKeywordPage, { generateMetadata } from './custom-map-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapZuneraOtServerKeywordPage />;
}
