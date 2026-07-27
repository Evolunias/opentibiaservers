import RealMapKasteriaForumKeywordPage, { generateMetadata } from './real-map-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaForumKeywordPage />;
}
