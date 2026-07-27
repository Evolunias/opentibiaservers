import Tibia74PvpeForumKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpeForumKeywordPage />;
}
