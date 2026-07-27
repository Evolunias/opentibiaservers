import TibiameLaunchKeywordPage, { generateMetadata } from './tibiame-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameLaunchKeywordPage />;
}
