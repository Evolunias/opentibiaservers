import Tibia84ServerKeywordPage, { generateMetadata } from './tibia-8-4-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84ServerKeywordPage />;
}
