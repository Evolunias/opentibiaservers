import Tibia772ServerKeywordPage, { generateMetadata } from './tibia-7-72-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772ServerKeywordPage />;
}
