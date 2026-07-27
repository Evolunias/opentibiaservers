import Tibia12FreshStartServerKeywordPage, { generateMetadata } from './tibia-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartServerKeywordPage />;
}
