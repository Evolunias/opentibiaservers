import OldSchoolEvoluniaOnlineKeywordPage, { generateMetadata } from './old-school-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOnlineKeywordPage />;
}
