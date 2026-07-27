import TibiaPrivateServerPolandKeywordPage, { generateMetadata } from './tibia-private-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerPolandKeywordPage />;
}
