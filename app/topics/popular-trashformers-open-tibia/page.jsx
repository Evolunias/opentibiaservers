import PopularTrashformersOpenTibiaKeywordPage, { generateMetadata } from './popular-trashformers-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersOpenTibiaKeywordPage />;
}
