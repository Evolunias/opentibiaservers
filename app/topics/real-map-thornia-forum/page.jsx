import RealMapThorniaForumKeywordPage, { generateMetadata } from './real-map-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaForumKeywordPage />;
}
