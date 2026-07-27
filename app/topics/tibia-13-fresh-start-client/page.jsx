import Tibia13FreshStartClientKeywordPage, { generateMetadata } from './tibia-13-fresh-start-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartClientKeywordPage />;
}
