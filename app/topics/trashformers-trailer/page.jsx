import TrashformersTrailerKeywordPage, { generateMetadata } from './trashformers-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersTrailerKeywordPage />;
}
