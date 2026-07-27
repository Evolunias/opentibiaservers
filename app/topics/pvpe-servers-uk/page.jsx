import PvpeServersUkKeywordPage, { generateMetadata } from './pvpe-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersUkKeywordPage />;
}
