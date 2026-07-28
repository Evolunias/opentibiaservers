import OtbEditorPage, { generateMetadata } from './otb-editor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtbEditorPage />;
}
