import Tibia74ServerActiveKeywordPage, { generateMetadata } from './tibia-7-4-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerActiveKeywordPage />;
}
