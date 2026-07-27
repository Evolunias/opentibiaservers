import Tibia76PrivateServerKeywordPage, { generateMetadata } from './tibia-7-6-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PrivateServerKeywordPage />;
}
