import SaintsotSouthAmericaServerKeywordPage, { generateMetadata } from './saintsot-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSouthAmericaServerKeywordPage />;
}
