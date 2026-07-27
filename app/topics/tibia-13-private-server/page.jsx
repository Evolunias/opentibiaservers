import Tibia13PrivateServerKeywordPage, { generateMetadata } from './tibia-13-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PrivateServerKeywordPage />;
}
