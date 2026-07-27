import Tibia13FreshStartServerKeywordPage, { generateMetadata } from './tibia-13-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartServerKeywordPage />;
}
