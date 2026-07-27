import TibiaHighExpServerRealMapKeywordPage, { generateMetadata } from './tibia-high-exp-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerRealMapKeywordPage />;
}
