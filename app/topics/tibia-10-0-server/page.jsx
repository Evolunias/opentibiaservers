import Tibia100ServerKeywordPage, { generateMetadata } from './tibia-10-0-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100ServerKeywordPage />;
}
