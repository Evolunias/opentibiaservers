import PvpeServersPolandKeywordPage, { generateMetadata } from './pvpe-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersPolandKeywordPage />;
}
