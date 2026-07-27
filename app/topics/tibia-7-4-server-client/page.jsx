import Tibia74ServerClientKeywordPage, { generateMetadata } from './tibia-7-4-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerClientKeywordPage />;
}
