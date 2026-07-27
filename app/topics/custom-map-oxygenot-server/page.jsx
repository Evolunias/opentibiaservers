import CustomMapOxygenotServerKeywordPage, { generateMetadata } from './custom-map-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOxygenotServerKeywordPage />;
}
