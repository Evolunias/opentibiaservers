import RemeresMapEditorPage, { generateMetadata } from './remeres-map-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RemeresMapEditorPage />;
}
