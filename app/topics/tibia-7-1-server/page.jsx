import Tibia71ServerKeywordPage, { generateMetadata } from './tibia-7-1-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71ServerKeywordPage />;
}
