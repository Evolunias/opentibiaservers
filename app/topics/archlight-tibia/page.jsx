import ArchlightTibiaKeywordPage, { generateMetadata } from './archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightTibiaKeywordPage />;
}
