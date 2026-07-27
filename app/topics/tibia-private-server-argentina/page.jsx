import TibiaPrivateServerArgentinaKeywordPage, { generateMetadata } from './tibia-private-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerArgentinaKeywordPage />;
}
