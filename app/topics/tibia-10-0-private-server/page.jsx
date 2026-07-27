import Tibia100PrivateServerKeywordPage, { generateMetadata } from './tibia-10-0-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PrivateServerKeywordPage />;
}
