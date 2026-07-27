import PvpeServerListPolandKeywordPage, { generateMetadata } from './pvpe-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListPolandKeywordPage />;
}
