import Tibia13ServerPolandKeywordPage, { generateMetadata } from './tibia-13-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerPolandKeywordPage />;
}
