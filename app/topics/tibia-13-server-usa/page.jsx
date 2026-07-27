import Tibia13ServerUsaKeywordPage, { generateMetadata } from './tibia-13-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerUsaKeywordPage />;
}
