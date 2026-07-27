import Tibia13ServerGermanyKeywordPage, { generateMetadata } from './tibia-13-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerGermanyKeywordPage />;
}
