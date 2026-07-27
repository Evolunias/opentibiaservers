import ArcaniarlOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlOldSchoolServerArgentinaKeywordPage />;
}
