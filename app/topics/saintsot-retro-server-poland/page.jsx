import SaintsotRetroServerPolandKeywordPage, { generateMetadata } from './saintsot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerPolandKeywordPage />;
}
