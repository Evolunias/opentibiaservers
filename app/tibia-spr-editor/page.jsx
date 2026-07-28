import TibiaSprEditorPage, { generateMetadata } from './tibia-spr-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaSprEditorPage />;
}
