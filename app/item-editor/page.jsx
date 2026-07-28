import ItemEditorPage, { generateMetadata } from './item-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ItemEditorPage />;
}
