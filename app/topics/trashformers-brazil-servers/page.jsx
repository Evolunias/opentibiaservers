import TrashformersBrazilServersKeywordPage, { generateMetadata } from './trashformers-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersBrazilServersKeywordPage />;
}
