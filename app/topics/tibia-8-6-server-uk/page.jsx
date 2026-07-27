import Tibia86ServerUkKeywordPage, { generateMetadata } from './tibia-8-6-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerUkKeywordPage />;
}
