import Tibia74PrivateServerKeywordPage, { generateMetadata } from './tibia-7-4-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PrivateServerKeywordPage />;
}
