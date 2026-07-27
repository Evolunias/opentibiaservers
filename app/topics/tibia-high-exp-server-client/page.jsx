import TibiaHighExpServerClientKeywordPage, { generateMetadata } from './tibia-high-exp-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerClientKeywordPage />;
}
