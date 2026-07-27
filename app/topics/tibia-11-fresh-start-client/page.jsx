import Tibia11FreshStartClientKeywordPage, { generateMetadata } from './tibia-11-fresh-start-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartClientKeywordPage />;
}
