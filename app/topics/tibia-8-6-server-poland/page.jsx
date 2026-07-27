import Tibia86ServerPolandKeywordPage, { generateMetadata } from './tibia-8-6-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerPolandKeywordPage />;
}
