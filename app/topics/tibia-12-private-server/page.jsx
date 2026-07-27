import Tibia12PrivateServerKeywordPage, { generateMetadata } from './tibia-12-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PrivateServerKeywordPage />;
}
