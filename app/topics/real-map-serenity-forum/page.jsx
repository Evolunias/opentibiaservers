import RealMapSerenityForumKeywordPage, { generateMetadata } from './real-map-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityForumKeywordPage />;
}
