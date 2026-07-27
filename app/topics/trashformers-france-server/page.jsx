import TrashformersFranceServerKeywordPage, { generateMetadata } from './trashformers-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersFranceServerKeywordPage />;
}
