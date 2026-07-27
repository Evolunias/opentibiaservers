import Tibia71PrivateServerKeywordPage, { generateMetadata } from './tibia-7-1-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PrivateServerKeywordPage />;
}
