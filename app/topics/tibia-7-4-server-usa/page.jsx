import Tibia74ServerUsaKeywordPage, { generateMetadata } from './tibia-7-4-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerUsaKeywordPage />;
}
