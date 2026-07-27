import TibiaPrivateServerActiveKeywordPage, { generateMetadata } from './tibia-private-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerActiveKeywordPage />;
}
