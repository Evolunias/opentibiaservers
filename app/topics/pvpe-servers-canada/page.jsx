import PvpeServersCanadaKeywordPage, { generateMetadata } from './pvpe-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersCanadaKeywordPage />;
}
