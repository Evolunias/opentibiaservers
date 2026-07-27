import Tibia86ServerEuropeKeywordPage, { generateMetadata } from './tibia-8-6-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerEuropeKeywordPage />;
}
