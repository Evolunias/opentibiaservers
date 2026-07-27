import TrashformersCommandsKeywordPage, { generateMetadata } from './trashformers-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersCommandsKeywordPage />;
}
