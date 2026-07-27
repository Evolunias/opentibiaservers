import Tibia84PrivateServerKeywordPage, { generateMetadata } from './tibia-8-4-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PrivateServerKeywordPage />;
}
