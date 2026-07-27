import Tibia11FreshStartServerKeywordPage, { generateMetadata } from './tibia-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartServerKeywordPage />;
}
