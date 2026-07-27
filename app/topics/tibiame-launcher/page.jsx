import TibiameLauncherKeywordPage, { generateMetadata } from './tibiame-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameLauncherKeywordPage />;
}
