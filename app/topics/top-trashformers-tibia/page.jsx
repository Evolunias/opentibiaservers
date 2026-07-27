import TopTrashformersTibiaKeywordPage, { generateMetadata } from './top-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersTibiaKeywordPage />;
}
