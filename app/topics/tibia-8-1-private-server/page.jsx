import Tibia81PrivateServerKeywordPage, { generateMetadata } from './tibia-8-1-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PrivateServerKeywordPage />;
}
