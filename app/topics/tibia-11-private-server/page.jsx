import Tibia11PrivateServerKeywordPage, { generateMetadata } from './tibia-11-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PrivateServerKeywordPage />;
}
