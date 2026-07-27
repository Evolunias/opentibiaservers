import SaintsotFranceServerKeywordPage, { generateMetadata } from './saintsot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotFranceServerKeywordPage />;
}
