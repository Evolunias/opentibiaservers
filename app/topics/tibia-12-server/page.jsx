import Tibia12ServerKeywordPage, { generateMetadata } from './tibia-12-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12ServerKeywordPage />;
}
