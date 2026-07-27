import Tibia11ServerKeywordPage, { generateMetadata } from './tibia-11-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11ServerKeywordPage />;
}
