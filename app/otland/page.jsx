import CommunityArchivePage, { generateMetadata } from './community-archive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CommunityArchivePage />;
}
