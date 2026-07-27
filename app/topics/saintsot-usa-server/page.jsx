import SaintsotUsaServerKeywordPage, { generateMetadata } from './saintsot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotUsaServerKeywordPage />;
}
