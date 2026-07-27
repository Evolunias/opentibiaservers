import TrashformersBrazilServerKeywordPage, { generateMetadata } from './trashformers-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersBrazilServerKeywordPage />;
}
