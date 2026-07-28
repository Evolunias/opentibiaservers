import SprEditorPage, { generateMetadata } from './spr-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SprEditorPage />;
}
