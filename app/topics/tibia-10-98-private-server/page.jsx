import Tibia1098PrivateServerKeywordPage, { generateMetadata } from './tibia-10-98-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PrivateServerKeywordPage />;
}
