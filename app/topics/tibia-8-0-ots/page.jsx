import Tibia80OtsKeywordPage, { generateMetadata } from './tibia-8-0-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OtsKeywordPage />;
}
