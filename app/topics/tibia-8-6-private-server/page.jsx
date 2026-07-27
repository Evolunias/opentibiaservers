import Tibia86PrivateServerKeywordPage, { generateMetadata } from './tibia-8-6-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PrivateServerKeywordPage />;
}
