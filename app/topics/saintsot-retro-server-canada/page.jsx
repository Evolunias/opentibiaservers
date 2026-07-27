import SaintsotRetroServerCanadaKeywordPage, { generateMetadata } from './saintsot-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerCanadaKeywordPage />;
}
