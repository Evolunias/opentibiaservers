import TibiaCustomServerClientKeywordPage, { generateMetadata } from './tibia-custom-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerClientKeywordPage />;
}
