import BaiakTibiaPrivateServerPolandKeywordPage, { generateMetadata } from './baiak-tibia-private-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaPrivateServerPolandKeywordPage />;
}
