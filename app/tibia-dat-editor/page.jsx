import TibiaDatEditorPage, { generateMetadata } from './tibia-dat-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaDatEditorPage />;
}
