import Tibia1098ServerKeywordPage, { generateMetadata } from './tibia-10-98-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerKeywordPage />;
}
