import Tibia13ServerEuropeKeywordPage, { generateMetadata } from './tibia-13-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerEuropeKeywordPage />;
}
