import CustomTrashformersTibiaKeywordPage, { generateMetadata } from './custom-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersTibiaKeywordPage />;
}
