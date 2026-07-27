import ArchlightRetroServerUsaKeywordPage, { generateMetadata } from './archlight-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRetroServerUsaKeywordPage />;
}
