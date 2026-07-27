import PopularTrashformersTibiaKeywordPage, { generateMetadata } from './popular-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersTibiaKeywordPage />;
}
