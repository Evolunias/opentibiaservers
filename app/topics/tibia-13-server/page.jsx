import Tibia13ServerKeywordPage, { generateMetadata } from './tibia-13-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerKeywordPage />;
}
