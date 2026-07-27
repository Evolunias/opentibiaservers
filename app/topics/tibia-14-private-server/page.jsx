import Tibia14PrivateServerKeywordPage, { generateMetadata } from './tibia-14-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PrivateServerKeywordPage />;
}
