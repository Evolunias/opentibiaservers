import SaintsotRetroServerBrazilKeywordPage, { generateMetadata } from './saintsot-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerBrazilKeywordPage />;
}
