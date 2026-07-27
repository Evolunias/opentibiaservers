import TibiaPrivateServerCanadaKeywordPage, { generateMetadata } from './tibia-private-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerCanadaKeywordPage />;
}
