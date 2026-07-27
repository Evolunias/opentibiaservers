import ArchlightRetroServerPolandKeywordPage, { generateMetadata } from './archlight-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRetroServerPolandKeywordPage />;
}
