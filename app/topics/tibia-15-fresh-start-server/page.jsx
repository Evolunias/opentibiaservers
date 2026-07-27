import Tibia15FreshStartServerKeywordPage, { generateMetadata } from './tibia-15-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartServerKeywordPage />;
}
