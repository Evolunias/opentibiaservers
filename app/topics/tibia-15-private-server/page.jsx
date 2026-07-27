import Tibia15PrivateServerKeywordPage, { generateMetadata } from './tibia-15-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PrivateServerKeywordPage />;
}
