import Tibia772PrivateServerKeywordPage, { generateMetadata } from './tibia-7-72-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PrivateServerKeywordPage />;
}
