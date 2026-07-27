import TrashformersLauncherKeywordPage, { generateMetadata } from './trashformers-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersLauncherKeywordPage />;
}
