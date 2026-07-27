import CustomMapForumFranceKeywordPage, { generateMetadata } from './custom-map-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumFranceKeywordPage />;
}
