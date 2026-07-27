import ArchlightOpenTibiaKeywordPage, { generateMetadata } from './archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightOpenTibiaKeywordPage />;
}
